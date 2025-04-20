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
            let itemMarkup = `<li class="portfolio__item ${project.category}" data-category="${project.category}" data-id="${project.id}">`;
            itemMarkup += `<div class="work" data-modal="#modal_project_${index + 1}">`;

            // Fixed: use template literal properly
            itemMarkup += `<div class="work__image">
        <img src="assets/images/${project.id}/${project.poster}" alt="${project.title}" width="370" height="300"/>
    </div>`;

            itemMarkup += '<div class="work__info">';
            itemMarkup += `<div class="work__category">category: ${project.category}</div>`;
            itemMarkup += `<div class="work__title">${project.title}<span class="work__date">${project.date}</span></div>`;
            itemMarkup += '</div></div></li>';

            return itemMarkup;
        }
    }

    function filterDataByCategory() {
        return currentCategory !== '*'
            ? projectsData.filter(project => project.category === currentCategory)
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

    function generatePortfolioItem(project, index) {
        const $portfolioItem = $('<li>')
            .addClass(`portfolio__item ${project.category}`)
            .attr('data-category', project.category)
            .attr('data-id', project.id);
        const $work = $('<div>')
            .addClass('work')
            .attr('data-modal', `#modal_project_${index + 1}`);
        const $img = $('<img>')
            .attr('src', `assets/images/${project.id}/${project.poster}`)
            .attr('alt', project.title)
            .attr('width', 370)
            .attr('height', 300);
        const $workImage = $('<div>').addClass('work__image');
        $workImage.append($img);
        const $workInfo = $('<div>').addClass('work__info');
        const $workCategory = $('<div>')
            .addClass('work__category')
            .text(`category: ${project.category}`);
        const $workTitle = $('<div>').addClass('work__title').text(project.title);
        const $workDate = $('<span>').addClass('work__date').text(project.date);

        $workTitle.append($workDate);
        $workInfo.append($workCategory, $workTitle);
        $work.append($workImage, $workInfo);
        $portfolioItem.append($work);
        return $portfolioItem;
    }
}
