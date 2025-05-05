import {toolsData} from "../../data/libs.js";


export function renderToolsSection() {
    toolsData.forEach(data => {
        const toolsItem = createToolItem(data);
        $('.tools__container').append(toolsItem);
    });
}

// Create a single education item element
function createToolItem(data) {
    const toolsItem = $('<div>').addClass('tools__item'); // equivalent to "card"
    const toolsItemContent = $('<div>').addClass('tools__item__content'); // equivalent to "card__content"
    const toolsItemInner = $('<div>').addClass('tools__item__content-inner'); // equivalent to "card__content-inner"

    const title = $('<div>').addClass('tools__title').text(data.title); // equivalent to "card__title"

    // Create a list for items
    const itemList = $('<ul>').addClass('tools__list'); // equivalent to "card__list"

    // Loop through items and create list items with links
    data.items.forEach(item => {
        const itemLink = $('<a>').attr('href', item.link).text(item.name); // create link for each item
        const listItem = $('<li>').addClass('tools__list-item').append(itemLink); // create list item
        itemList.append(listItem); // append list item to list
    });

    const toolsItemOverlay = $('<div>').addClass('tools__item__overlay');
    toolsItemOverlay.append(title);
    toolsItemInner.append(itemList);
    toolsItemContent.append(toolsItemInner);
    toolsItem.append(toolsItemContent, toolsItemOverlay);

    return toolsItem;
}
