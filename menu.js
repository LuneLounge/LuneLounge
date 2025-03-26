document.addEventListener("DOMContentLoaded", function () {
    fetchMenu();
});

function fetchMenu() {
    fetch("https://qr.mydigimenu.com/9babf62f-4856-4ff6-b24d-3c1200d82dc0/menu-page?menuID=30270&sectionID=218334")
        .then(response => response.json()) // Convert response to JSON
        .then(data => {
            displayMenu(data);
        })
        .catch(error => console.error("Error fetching menu:", error));
}

function displayMenu(data) {
    const menuTabs = document.getElementById("menuTabs");
    const menuContent = document.getElementById("menuContent");

    const categories = {};

    // Organize items by category
    data.items.forEach(item => {
        if (!categories[item.category]) {
            categories[item.category] = [];
        }
        categories[item.category].push({
            name: item.name,
            description: item.description || "",
        });
    });

    let firstTab = true;

    Object.keys(categories).forEach(category => {
        const categoryId = category.replace(/\s+/g, "-").toLowerCase(); // Convert name to ID-friendly format

        // Create tab
        const tab = document.createElement("li");
        tab.classList.add("nav-item");
        tab.innerHTML = `
            <a class="nav-link ${firstTab ? "active" : ""}" id="${categoryId}-tab" data-bs-toggle="tab" href="#${categoryId}">
                ${category}
            </a>
        `;
        menuTabs.appendChild(tab);

        // Create content section
        const content = document.createElement("div");
        content.classList.add("tab-pane", "fade");
        
        // Ensure only the first tab is active
        if (firstTab) {
            content.classList.add("show", "active");
        }

        content.id = categoryId;

        let itemsHTML = `<ul class="list-group">`;
        categories[category].forEach(item => {
            itemsHTML += `
                <li class="list-group-item">
                    <strong>${item.name}</strong><br>
                    <small>${item.description}</small>
                </li>
            `;
        });
        itemsHTML += `</ul>`;

        content.innerHTML = itemsHTML;
        menuContent.appendChild(content);

        firstTab = false; // Set only the first tab as active
    });
}
