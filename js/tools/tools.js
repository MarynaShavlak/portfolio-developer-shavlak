import {toolsData} from "../../data/libs.js";


export function renderToolsSection() {
    toolsData.forEach(data => {
        const toolsItem = createToolItem(data);
        $('.tools__container').append(toolsItem);
    });

    // $('.tools__container').isotope({
    //         itemSelector: '.tools__item',
    //         layoutMode: 'masonry',
    //         // // percentPosition: true,
    //         // masonry: {
    //         //     // columnWidth: 200,
    //         //     // gutter: 10
    //         // }
    //     });

}

// Create a single education item element
function createToolItem(data) {
    const toolsItem = $('<div>').addClass('tools__item');
    const toolsItemContent = $('<div>').addClass('tools__item__content');


    const title = $('<div>').addClass('tools__title').text(data.title);


    const itemList = $('<ul>').addClass('tools__list');


    data.items.forEach(item => {
        const itemLink = $('<a>')
            .attr('href', item.link)
            .attr('target', '_blank')
            .addClass('tools__list-link')
            .text(item.name);
        const listItem = $('<li>').addClass('tools__list-item').append(itemLink);
        itemList.append(listItem);
    });

    const toolsItemOverlay = $('<div>').addClass('tools__item__overlay');
    toolsItemOverlay.append(title);

    toolsItemContent.append(itemList);
    toolsItem.append(toolsItemContent, toolsItemOverlay);

    return toolsItem;
}
