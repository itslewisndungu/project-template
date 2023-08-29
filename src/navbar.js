const nav = document.getElementById("navbar")
let isNavFolded = false;

nav.innerHTML = `
    <div id="user_info " class="p-4 flex flex-col items-center">
     <div id="avatar" class="flex items-center justify-center h-16 aspect-square bg-[#1971c233] rounded-full text-2xl ">
        <span class="text-[#228be6]">JK</span>
     </div>
     <div id="contact" class="text-center">
     <div id="user_name" class="mt-4 text-xl text-gray-800 font-medium">
        John Kimani
     </div>
     <div id="user_email" class="text-gray-700 text-sm">
        kimani.john@gmail.com
     </div>
     </div>
    </div>
    
    <div id="links" class="p-4 flex flex-col gap-1">
        <a href="/" class="nav-link  bg-[#f2f6f9]"> 
            <i class="fa fa-home" aria-hidden="true"></i>
            <span class="nav-link-label">Dashboard</span>
        </a>
        
        <a href="/" class="nav-link ">
            <i class="fa fa-home" aria-hidden="true"></i>
            <span class="nav-link-label">Members</span>
        </a>
        
        <a href="/" class="nav-link ">
            <i class="fa fa-home" aria-hidden="true"></i>
            <span class="nav-link-label">Meetings</span>
        </a>
        
        <a href="/" class="nav-link ">
            <i class="fa fa-home" aria-hidden="true"></i>
            <span class="nav-link-label">Loans</span>
        </a>
        
        <a href="/" class="nav-link ">
            <i class="fa fa-home" aria-hidden="true"></i>
            <span class="nav-link-label">Transactions</span>
        </a>
        
        <a href="/" class="nav-link ">
            <i class="fa fa-home" aria-hidden="true"></i>
            <span class="nav-link-label">Account Settings</span>
        </a>
    </div>
`

function setupMenuButton() {
    const menuButton = document.getElementById("menu");
    const navLinkLabels = document.getElementsByClassName("nav-link-label")
    const contact = document.getElementById("contact")
    const avatar = document.getElementById("avatar")

    menuButton.addEventListener("click", () => {
        isNavFolded = !isNavFolded;

        if (isNavFolded) {
            for (let link of navLinkLabels) {
                link.classList.add("hidden");
            }
            contact.classList.add("hidden")
            avatar.classList.add("!h-8", "!text-lg")
            nav.classList.remove("w-64")
        } else {
            for (let link of navLinkLabels) {
                link.classList.remove("hidden");
            }
            contact.classList.remove("hidden")
            avatar.classList.remove("!h-8", "!text-lg")
            nav.classList.add("w-64")
        }
    })
}

document.addEventListener("DOMContentLoaded", () => {
    setupMenuButton()
})


