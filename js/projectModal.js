import { projectsData } from '../data/projectsData.js';

export function initProjectModal() {
    $('.portfolio__item').on('click', handleProjectModal);
    $('.close-modal-btn').on('click', hideProjectModal);

    $(document).on('click', '.project-modal', function (e) {
        e.stopPropagation();
    });


    $(document).on('click', '.modal-backdrop-project', function () {
        hideProjectModal();
    });
}

export function handleProjectModal(e) {
    const $clickedItem = $(e.currentTarget);
    const projectData = getProjectData($clickedItem);

    generateProjectModalMarkup(projectData);
    initProjectModalSlider();
    showProjectModal();
}

function getProjectData($el) {
    return projectsData.find(project => project.id === $el.attr('data-id'));
}

function generateProjectModalMarkup(projectData) {
    const {
        title, images, descr, techStack,
        skills, features, additionalInfo,
        id
    } = projectData;

    $('.modal__project').remove(); // Clean up any existing modal
    const $modal = $('<div class="modal__project"></div>');

    const $header = $('<div class="project-header"></div>').append(
        createProjectMediaSection(title, id, images),
        createProjectMetaSection(projectData)
    );

    const $info = $('<div class="project-infoContainer"></div>').append(
        createParagraphSection(descr, 'project-descr'),
        createTechStackSection(techStack),
        createListSection(skills, 'Skills', 'project-skills', 'skills-list', 'skills-item'),
        createFeaturesSection(features),
        createAdditionalInfoSection(additionalInfo)
    );

    $modal.append($header, $info);
    $('.project-modal').append($modal);
}


function createProjectMediaSection(title,id, mediaFiles) {
    const $container = $('<div class="project-img-wrap"></div>');
    const $slider = $('<div class="project-slider"></div>');

    mediaFiles.forEach((file, index) => {
        const filePath = `assets/images/${id}/${file}`;
        const isVideo = file.toLowerCase().endsWith('.mp4');

        const $media = isVideo
            ? $(
                `<video class="project-video project-slide${index + 1} " controls autoplay muted>
                    <source src="${filePath}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>`
            )
            : $(
                `<img class="project-picture project-slide${index + 1}" src="${filePath}" alt="project media" width="800px" />`
            );

        $slider.append($media);
    });

    const $buttons = $(`
        <ul class="project-slider-buttons">
            <li><button type="button" class="project-slider-btn project-prev-btn"><i class="fa-solid fa-angle-left"></i></button></li>
            <li><button type="button" class="project-slider-btn project-next-btn"><i class="fa-solid fa-angle-right"></i></button></li>
        </ul>
    `);

    return $container.append($slider, $buttons);
}

function createProjectMetaSection( project ) {
     const {  date, website, repository, title, slogan, industry, presentation,  timeline, apiDocumentation, categories} = project
    const $meta = $('<div class="project-meta"></div>');
    const $innerMeta = $('<div class="project-meta__inner"></div>');
    const $title = `<h3 class="project-title">${title}</h3>`
    const $slogan = `<p class="project-slogan">${slogan}</p>`
    const $firstLine = $(`<div class="project-meta__first-line">
        <span class="project-category">${categories.join(', ')}</span>
        <span class="project-year">${date}</span>
    </div>`);

    const $infoList = $('<ul class="project-info"></ul>');

    [['Industry', industry], ['Timeline', timeline]].forEach(([label, value]) => {
        if (value) {
            $infoList.append(`<li class="project-info__item">
                <span class="meta-title">${label}</span>
                <span class="meta-value ${label.toLowerCase()}-value">${value}</span>
            </li>`);
        }
    });

    if (website) {
        $infoList.append(`<li class="project-info__item">
            <span class="meta-title">Website</span>
            <a class="meta-value website-value" href="${website.link}" target="_blank">${website.name}</a>
        </li>`);
    }

    if (repository) {
        $infoList.append(`<li class="project-info__item">
            <span class="meta-title">Source Code</span>
            <a class="meta-value repository-value" href="${repository.link}" target="_blank">${repository.name}</a>
        </li>`);
    }
    if (apiDocumentation) {
        $infoList.append(`<li class="project-info__item">
            <span class="meta-title">API Docs</span>
            <a class="meta-value api-doc-value" href="${apiDocumentation.link}" target="_blank">${apiDocumentation.name}</a>
        </li>`);
    }
    if (presentation) {
        $infoList.append(`<li class="project-info__item">
            <p class="meta-title">Slide Deck</p>
            <a class="meta-value presentation-value" href="${presentation.link}" target="_blank">${presentation.name}</a>
        </li>`);
    }
    $innerMeta.append($slogan, $firstLine, $infoList)
    return $meta.append($title, $innerMeta);
}

function createParagraphSection(paragraphs, className) {
    const $section = $(`<div class="${className}"></div>`);
    paragraphs.forEach(p => $section.append(`<p>${p}</p>`));
    return $section;
}

function createTechStackSection(stack) {
    if (!stack || typeof stack !== 'object') return $();

    const $container = $('<div class="project-techStack"></div>');
    $container.append('<p class="info-title">Tech Stack</p>');

    const categoriesMap = {
        architecture: 'Architecture',
        frontend: 'Frontend',
        backend: 'Backend',
        build: 'Build Tools',
        tools: 'Dev Utilities',
        ciCd: 'CI/CD',
        ui: 'UI Libraries',
        effects: 'Animation & Effects',
        optimization: 'Performance Optimization',
        testing: 'Testing',
        media: 'Media Resources',
        storage: 'Data Storage',
        api: 'API Integration',
        utilities: 'Utilities',
        interactivity: 'Interactivity',
        other: 'Other',
        forms: 'Form Handling',
        styling: 'Styling Features',
        stateManagement: 'State Management',
        dateTime: 'Date and Time Handling',

    };

    const $list = $('<ul class="tech-stack-wrapperlist"></ul>');

    Object.entries(stack).forEach(([key, items]) => {
        const label = categoriesMap[key] || key;
        const $cat = $(`<p class="tech-stack-category">${label}</p>`);
        const $itemList = $('<ul class="tech-stack-list"></ul>');

        (Array.isArray(items) ? items : [items]).forEach(tech =>
            $itemList.append(`<li class="tech-stack-item">${tech}</li>`)
        );

        const $entry = $('<li class="tech-stack-wrapperlist-item"></li>').append($cat, $itemList);
        $list.append($entry);
    });

    return $container.append($list);
}

function createListSection(data, title, wrapperClass, listClass, itemClass) {
    if (!Array.isArray(data) || !data.length) return $();
    const $wrapper = $(`<div class="${wrapperClass}"></div>`);
    const $list = $(`<ul class="${listClass}"></ul>`);
    data.forEach(item => $list.append(`<li class="${itemClass}">${item}</li>`));
    return $wrapper.append(`<p class="info-title">${title}</p>`, $list);
}

function createFeaturesSection(features) {
    if (!Array.isArray(features) || !features.length) return $();

    const $wrapper = $('<div class="project-features"></div>').append('<p class="info-title">Features</p>');
    const $list = $('<ul class="features-list"></ul>');

    features.forEach(({ title, items }, i) => {
        const $featureItem = $(`<li class="features-list-item" data-index="${i + 1}"></li>`);
        const $featureTitle = $(`<p class="feature-category">${title}:</p>`);
        const $itemsList = $('<ul class="feature-items-list"></ul>');

        items.forEach(itm => $itemsList.append(`<li class="feature-item">${itm}</li>`));
        $list.append($featureItem.append($featureTitle, $itemsList));
    });

    return $wrapper.append($list);
}

function createAdditionalInfoSection(info) {
    if (!Array.isArray(info) || !info.length) return $();

    const $wrapper = $('<div class="project-additional-info"></div>').append('<p class="info-title">Additional Info</p>');
    const $list = $('<ul class="additional-info-list"></ul>');

    info.forEach(({ title, items }, i) => {
        const $section = $(`<li class="additional-info-item" data-index="${i + 1}"></li>`);
        const $sectionTitle = $(`<p class="additional-info-category">${title}:</p>`);
        const $itemsList = $('<ul class="additional-items-list"></ul>');

        items.forEach(itm => $itemsList.append(`<li class="additional-item">${itm}</li>`));
        $list.append($section.append($sectionTitle, $itemsList));
    });

    return $wrapper.append($list);
}

function initProjectModalSlider() {
    const $slider = $('.project-slider');
    const $slides = $slider.children('img, video'); // Include both images and videos
    let currentIndex = 0;

    const updateSlider = () => {
        const offset = -currentIndex * 100 + '%';
        $slider.css('transform', `translateX(${offset})`);
    };

    $('.project-next-btn').off('click').on('click', () => {
        currentIndex = (currentIndex + 1) % $slides.length;
        updateSlider();
    });

    $('.project-prev-btn').off('click').on('click', () => {
        currentIndex = (currentIndex - 1 + $slides.length) % $slides.length;
        updateSlider();
    });


}

function showProjectModal() {
    $('.modal-backdrop-project').fadeIn('slow', () => {
        $('body').addClass('modal-open');
    });
}

function hideProjectModal() {
    $('.modal-backdrop-project').fadeOut('slow', () => {
        $('body').removeClass('modal-open');
    });
}
