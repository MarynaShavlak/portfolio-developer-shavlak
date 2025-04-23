import { handleProjectModal, initProjectModal } from "./projectModal.js";
import { projectsData } from "../data/projectsData.js";


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
    }

    function updateButtonsVisibility() {
        const filteredData = filterDataByCategory();
        const isLoadMoreVisible = currentIndex < filteredData.length - itemsPerPage;
        const isShowLessVisible = currentIndex >= itemsPerPage;

        $('.load-more-btn').toggle(isLoadMoreVisible);
        $('.show-less-btn').toggle(isShowLessVisible);
    }

    function renderPortfolio() {
        const $portfolioList = $('#portfolio');
        const filteredData = filterDataByCategory();
        const slicedData = filteredData.slice(0, currentIndex + itemsPerPage);
        const markup = generatePortfolioMarkUp(slicedData);
        $portfolioList.html(markup);
    }

    function renderAndFilterPortfolio() {
        renderPortfolio();
        setPortfolioFilter();
    }

    function updateIsotope(action) {
        const $portfolioList = $('.portfolio-list');
        const totalItems = $portfolioList.children().length;

        if (action === 'loadMore') {
            const newData = filterDataByCategory().slice(currentIndex, currentIndex + itemsPerPage);
            const newMarkup = generatePortfolioMarkUp(newData);
            const $items = $(newMarkup);
            $portfolioList.append($items).isotope('appended', $items);
        } else if (action === 'showLess') {
            const $itemsToRemove = $portfolioList
                .isotope('getItemElements')
                .slice(currentIndex + itemsPerPage, totalItems);
            $portfolioList.isotope('remove', $itemsToRemove).isotope('layout');
        }
    }

    function filterDataByCategory() {
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
        $portfolio.isotope({ filter: filterValue });
    }

    function updateFilterButtons(chosenFilterBtn) {
        const filters = $('[data-filter]');
        filters.removeClass('filter-btn--active');
        $(chosenFilterBtn).addClass('filter-btn--active');
    }

    // $('.filter-btn').on('click', function () {
    //     updateFilterButtons(this);
    //     const filterValue = $(this).attr('data-filter');
    //     currentCategory = filterValue !== '*' ? filterValue.slice(1) : '*';
    //     currentIndex = 0;
    //
    //     // Full rerender
    //     const filteredData = filterDataByCategory().slice(0, itemsPerPage);
    //     const markup = generatePortfolioMarkUp(filteredData);
    //     const $portfolioList = $('.portfolio-list');
    //     $portfolioList.isotope('remove', $portfolioList.children());
    //     const $newItems = $(markup);
    //     $portfolioList.append($newItems).isotope('appended', $newItems);
    //     setPortfolioFilter();
    //     updateButtonsVisibility();
    //
    //     $('.portfolio__item').off('click', handleProjectModal);
    //     $('.portfolio__item').on('click', handleProjectModal);
    // });
    $('.filter-btn').on('click', function () {
        updateFilterButtons(this);
        const filterValue = $(this).attr('data-filter');
        currentCategory = filterValue !== '*' ? filterValue.slice(1) : '*';
        currentIndex = 0;

        // Filter Isotope items smoothly
        const $portfolioList = $('.portfolio-list');
        $portfolioList.isotope({ filter: filterValue });

        // Wait for images to load before triggering layout
        imagesLoaded($portfolioList, () => {
            $portfolioList.isotope('layout');
        });

        updateButtonsVisibility();
        $('.portfolio__item').off('click', handleProjectModal);
        $('.portfolio__item').on('click', handleProjectModal);
    });
}

// Shared function to return markup string for given data
function generatePortfolioMarkUp(data) {
    return data.map((project, index) => {
        const categories = project.categories.join(' ');
        return `
        <li class="portfolio__item ${categories}" data-category="${categories}" data-id="${project.id}">
            <div class="work" data-modal="#modal_project_${index + 1}">
                <div class="work__image">
                    <img src="assets/images/${project.id}/${project.poster}" alt="${project.title}" width="370" height="300"/>
                </div>
                <div class="work__info">
                    <p class="work__title">${project.title}<span class="work__date">${project.date}</span></p>
                    <p class="work__category"><span class="work__subtext">category: </span> ${project.categories.join(', ')}</p>
                    <p class="work__type"><span class="work__subtext">type: </span>${project.type}</p>
                </div>
            </div>
        </li>`;
    }).join('');
}
