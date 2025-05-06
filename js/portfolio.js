
// import { handleProjectModal, initProjectModal } from "./projectModal.js";
// import { projectsData } from "../data/projectsData.js";

import { handleProjectModal, initProjectModal } from "./projectModal.js";
import { projectsData } from "../data/projectsData.js";

export function initPortfolio() {
    const itemsPerPage = 6;
    let currentIndex = 0;
    let currentCategory = '*';

    const $portfolioList = $('#portfolio');

    initProjectModal();
    initIsotope();

    renderFilteredItems();

    $('.filter-btn').on('click', function () {
        updateFilterButtons(this);
        currentCategory = $(this).attr('data-filter').replace('.', '') || '*';
        currentIndex = 0;
        renderFilteredItems();
    });

    $('.load-more-btn').on('click', function () {
        currentIndex += itemsPerPage;
        renderFilteredItems();
    });

    $('.show-less-btn').on('click', function () {
        currentIndex = Math.max(currentIndex - itemsPerPage, 0);
        renderFilteredItems();
    });

    function initIsotope() {
        $portfolioList.isotope({
            itemSelector: '.portfolio__item',
            layoutMode: 'masonry',
            percentPosition: true,
            masonry: {
                columnWidth: 370,
                gutter: 30
            }
        });
    }

    function renderFilteredItems() {
        const filtered = currentCategory === '*'
            ? projectsData
            : projectsData.filter(p => p.categories.includes(currentCategory));

        const paginated = filtered.slice(0, currentIndex + itemsPerPage);
        const markup = generatePortfolioMarkUp(paginated);

        // Clear and re-render
        $portfolioList.isotope('remove', $portfolioList.children()).isotope('layout');

        const $newItems = $(markup);
        $portfolioList.append($newItems).isotope('appended', $newItems);

        imagesLoaded($portfolioList, () => {
            $portfolioList.isotope('layout');
        });

        // Modal re-bind
        $('.portfolio__item').off('click', handleProjectModal).on('click', handleProjectModal);

        // Toggle buttons
        $('.load-more-btn').toggle(currentIndex + itemsPerPage < filtered.length);
        $('.show-less-btn').toggle(currentIndex > 0);
    }

    function updateFilterButtons(chosen) {
        $('.filter-btn').removeClass('filter-btn--active');
        $(chosen).addClass('filter-btn--active');
    }
}


// Shared function to return markup string for given data
function generatePortfolioMarkUp(data) {
    return data.map((project, index) => {
        const categories = project.categories.join(' ');
        const overview =  project.descr.join(' ').slice(0, 103) + '...'
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
                    <p class="work__short-overview">${overview}</p>
                    <button type="button" class="explore-project-btn star-btn">
                    <div class="star-1">
                        <img src="../assets/images/icons/star.svg" alt="Star Icon"/>
                    </div>
                    <div class="star-2">
                        <img src="../assets/images/icons/star.svg" alt="Star Icon"/>
                    </div>
                    <div class="star-3">
                        <img src="../assets/images/icons/star.svg" alt="Star Icon"/>
                    </div>
                    <div class="star-4">
                        <img src="../assets/images/icons/star.svg" alt="Star Icon"/>
                    </div>
                    <div class="star-5">
                        <img src="../assets/images/icons/star.svg" alt="Star Icon"/>
                    </div>
                    <div class="star-6">
                        <img src="../assets/images/icons/star.svg" alt="Star Icon"/>
                    </div>
                    Explore Project
                    
                    </button>
                </div>
            </div>
        </li>`;
    }).join('');
}


// export function initPortfolio() {
//     const itemsPerPage = 6;
//     let currentIndex = 0;
//     let currentCategory = '*';
//
//     renderAndFilterPortfolio();
//
//     $('.load-more-btn').on('click', () => handleButtonClick('loadMore'));
//     $('.show-less-btn').on('click', () => handleButtonClick('showLess'));
//     initProjectModal();
//
//     function handleButtonClick(action) {
//         if (action === 'loadMore') {
//             currentIndex += itemsPerPage;
//         } else if (action === 'showLess') {
//             currentIndex -= itemsPerPage;
//         }
//         updateIsotope(action);
//         $('.portfolio__item').off('click', handleProjectModal);
//         $('.portfolio__item').on('click', handleProjectModal);
//         updateButtonsVisibility();
//     }
//
//     function updateButtonsVisibility() {
//         const filteredData = filterDataByCategory();
//         const isLoadMoreVisible = currentIndex < filteredData.length - itemsPerPage;
//         const isShowLessVisible = currentIndex >= itemsPerPage;
//
//         $('.load-more-btn').toggle(isLoadMoreVisible);
//         $('.show-less-btn').toggle(isShowLessVisible);
//     }
//
//     function renderPortfolio() {
//         const $portfolioList = $('#portfolio');
//         const filteredData = filterDataByCategory();
//         console.log('filteredData', filteredData);
//         const slicedData = filteredData.slice(0, currentIndex + itemsPerPage);
//         console.log('slicedData', slicedData);
//         const markup = generatePortfolioMarkUp(slicedData);
//         $portfolioList.html(markup);
//     }
//
//     function renderAndFilterPortfolio() {
//         renderPortfolio();
//         setPortfolioFilter();
//     }
//
//     function updateIsotope(action) {
//         const $portfolioList = $('.portfolio-list');
//         const totalItems = $portfolioList.children().length;
//
//         if (action === 'loadMore') {
//             console.log('x', filterDataByCategory())
//             const newData = filterDataByCategory().slice(currentIndex, currentIndex + itemsPerPage);
//             const newMarkup = generatePortfolioMarkUp(newData);
//             const $items = $(newMarkup);
//             $portfolioList.append($items).isotope('appended', $items);
//         } else if (action === 'showLess') {
//             const $itemsToRemove = $portfolioList
//                 .isotope('getItemElements')
//                 .slice(currentIndex + itemsPerPage, totalItems);
//             $portfolioList.isotope('remove', $itemsToRemove).isotope('layout');
//         }
//     }
//
//     function filterDataByCategory() {
//         return currentCategory !== '*'
//             ? projectsData.filter(project => project.categories.includes(currentCategory))
//             : projectsData;
//     }
//
//     function setPortfolioFilter() {
//         const $portfolio = $('.portfolio-list').isotope({
//             itemSelector: '.portfolio__item',
//             percentPosition: true,
//             masonry: {
//                 columnWidth: 370,
//                 gutter: 30,
//             },
//         });
//
//         const filterValue = $('.filter-btn--active').attr('data-filter');
//         $portfolio.isotope({ filter: filterValue });
//     }
//
//     function updateFilterButtons(chosenFilterBtn) {
//         const filters = $('[data-filter]');
//         filters.removeClass('filter-btn--active');
//         $(chosenFilterBtn).addClass('filter-btn--active');
//     }
//
//
//     $('.filter-btn').on('click', function () {
//         updateFilterButtons(this);
//         const filterValue = $(this).attr('data-filter');
//         currentCategory = filterValue !== '*' ? filterValue.slice(1) : '*';
//         currentIndex = 0;
//
//         // Filter Isotope items smoothly
//         const $portfolioList = $('.portfolio-list');
//         $portfolioList.isotope({ filter: filterValue });
//
//         // Wait for images to load before triggering layout
//         imagesLoaded($portfolioList, () => {
//             $portfolioList.isotope('layout');
//         });
//
//         updateButtonsVisibility();
//         $('.portfolio__item').off('click', handleProjectModal);
//         $('.portfolio__item').on('click', handleProjectModal);
//     });
// }
