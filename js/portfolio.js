import {handleProjectModal, initProjectModal} from "./projectModal.js";
import {projectsData} from "../data/projectsData.js";

export function initPortfolio() {
    const itemsPerPage = 6;
    let currentIndex = 0;
    let currentCategory = '*';

    renderAndFilterPortfolio();

    $('.load-more-btn').on('click', () => handleButtonClick('loadMore'));
    $('.show-less-btn').on('click', () => handleButtonClick('showLess'));
    initProjectModal();

    function handleButtonClick(action) {
        if (action === 'loadMore') {
            currentIndex += itemsPerPage;
        } else if (action === 'showLess') {
            currentIndex -= itemsPerPage;
        }
        updateIsotope(action);
        $('.portfolio__item').off('click', handleProjectModal);
        $('.portfolio__item').on('click', handleProjectModal);
        updateButtonsVisibility();
        updateButtonsVisibility();
    }

    function updateButtonsVisibility() {
        const filteredData = filterDataByCategory();
        console.log('filteredData', filteredData)

        const isLoadMoreVisible =
            currentIndex < filteredData.length - itemsPerPage;
        const isShowLessVisible = currentIndex >= itemsPerPage;

        $('.load-more-btn').toggle(isLoadMoreVisible);
        $('.show-less-btn').toggle(isShowLessVisible);
    }

    function renderPortfolio() {
        const $portfolioList = $('#portfolio');
        $portfolioList.empty();
        const slicedData = filterDataByCategory().slice(
            0,
            currentIndex + itemsPerPage,
        );

        generatePortfolioMarkUp(slicedData);
    }

    function renderAndFilterPortfolio() {
        renderPortfolio();
        setPortfolioFilter();
    }

    function updateIsotope(action) {
        const $portfolioList = $('.portfolio-list');
        const totalItems = $portfolioList.children().length;

        const updateIsotopeLayout = () => $portfolioList.isotope('layout');

        if (action === 'loadMore') {
            const data = filterDataByCategory().slice(
                currentIndex,
                currentIndex + itemsPerPage,
            );
            console.log(data);
            const generatedMarkup = generatePortfolioMarkUp(data);
            const $items = $(generatedMarkup);

            $portfolioList.append($items).isotope('appended', $items);
        } else if (action === 'showLess') {
            const $itemsToRemove = $portfolioList
                .isotope('getItemElements')
                .slice(currentIndex + itemsPerPage, totalItems);

            $portfolioList.isotope('remove', $itemsToRemove);
            updateIsotopeLayout();
        }

        function generatePortfolioMarkUp(data) {
            let markup = '';

            data.forEach((project, index) => {
                markup += generatePortfolioItemMarkup(project, index);
            });

            return markup;
        }
        function generatePortfolioItemMarkup(project, index) {
            const categories = project.categories.join(' ');
            let itemMarkup = `<li class="portfolio__item ${categories}" data-category="${categories}" data-id="${project.id}">`;
            itemMarkup += `<div class="work" data-modal="#modal_project_${index + 1}">`;
            itemMarkup += `<div class="work__image">
        <img src="assets/images/${project.id}/${project.poster}" alt="${project.title}" width="370" height="300"/>
    </div>`;
            itemMarkup += '<div class="work__info">';
            itemMarkup += `<div class="work__category">category: ${project.categories.join(', ')}</div>`;
            itemMarkup += `<div class="work__title">${project.title}<span class="work__date">${project.date}</span></div>`;
            itemMarkup += '</div></div></li>';
            return itemMarkup;
        }
    //     function generatePortfolioItemMarkup(project, index) {
    //         console.log('pr', project)
    //         let itemMarkup = `<li class="portfolio__item ${project.categories.join(', ')}" data-category="${project.categories.join(', ')}" data-id="${project.id}">`;
    //         itemMarkup += `<div class="work" data-modal="#modal_project_${index + 1}">`;
    //
    //         // Fixed: use template literal properly
    //         itemMarkup += `<div class="work__image">
    //     <img src="assets/images/${project.id}/${project.poster}" alt="${project.title}" width="370" height="300"/>
    // </div>`;
    //
    //         itemMarkup += '<div class="work__info">';
    //         itemMarkup += `<div class="work__category">category: ${project.categories.join(', ')}</div>`;
    //         itemMarkup += `<div class="work__title">${project.title}<span class="work__date">${project.date}</span></div>`;
    //         itemMarkup += '</div></div></li>';
    //
    //         return itemMarkup;
    //     }
    }


    function filterDataByCategory() {
     console.log('currentCategory', currentCategory);
        return currentCategory !== '*'
            ? projectsData.filter(project => project.categories.includes(currentCategory))
            : projectsData;
    }

    function setPortfolioFilter() {
        const $portfolio = $('.portfolio-list').isotope({
            itemSelector: '.portfolio__item',
            percentPosition: true,
            masonry: {
                columnWidth: 370,
                gutter: 30,
            },
        });

        const filterValue = $('.filter-btn--active').attr('data-filter');

        $portfolio.isotope({filter: filterValue});
    }

    function updateFilterButtons(chosenFilterBtn) {
        const filters = $('[data-filter]');
        filters.removeClass('filter-btn--active');
        $(chosenFilterBtn).addClass('filter-btn--active');
    }

    $('.filter-btn').on('click', function () {
        updateFilterButtons(this);
        const filterValue = $(this).attr('data-filter');
        currentCategory =
            filterValue !== '*' ? filterValue.slice(1) : filterValue;
        currentIndex = 0;
        setPortfolioFilter();
        updateButtonsVisibility();
    });
}

function generatePortfolioMarkUp(data) {
    const $portfolioList = $('.portfolio-list');
    data.forEach((project, index) => {
        const item = generatePortfolioItem(project, index);
        $portfolioList.append(item);
    });

    function createElement(tag, className, attributes = {}, text = '') {
        const $el = $(`<${tag}>`);
        if (className) $el.addClass(className);
        if (text) $el.text(text);
        Object.entries(attributes).forEach(([key, value]) => {
            $el.attr(key, value);
        });
        return $el;
    };

    function generatePortfolioItem(project, index) {
        const $img = createElement('img', '', {
            src: `assets/images/${project.id}/${project.poster}`,
            alt: project.title,
            width: 370,
            height: 300
        });

        const $workImage = createElement('div', 'work__image').append($img);

        const $workCategory = createElement('p', 'work__category');
        $workCategory.append(
            createElement('span', 'work__subtext', {}, 'category: '),
            createElement('span', '', {}, project.categories.join(', '))
        );

        const $workType = createElement('p', 'work__type');
        $workType.append(
            createElement('span', 'work__subtext', {}, 'type: '),
            createElement('span', '', {}, project.type)
        );

        const $workDate = createElement('span', 'work__date', {}, project.date);

        const $workTitle = createElement('div', 'work__title', {}, project.title).append($workDate);

        const $workInfo = createElement('div', 'work__info')
            .append($workTitle, $workCategory, $workType );

        const $work = createElement('div', 'work', {
            'data-modal': `#modal_project_${index + 1}`
        }).append($workImage, $workInfo);

        const $portfolioItem = createElement('li', `portfolio__item ${project.categories.join(' ')}`, {
            'data-category': project.categories.join(', '),
            'data-id': project.id
        }).append($work);

        return $portfolioItem;
    }
}

