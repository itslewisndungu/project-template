const hamburgerMenu = document.getElementById("hamburger")
let body = document.getElementsByTagName('body')[0]

function setupHamburgerContent() {
    hamburgerMenu.innerHTML = `
<div class="fixed z-50 inset-0 overflow-y-auto lg:hidden" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-black/20 backdrop-blur-sm " aria-hidden="true"
         onclick="body.dataset.leftNavState = 'closed'"></div>
    <div class="relative bg-white w-80 max-w-[calc(100%-3rem)] min-h-screen">
        <button type="button" onclick="body.dataset.leftNavState = 'closed'"
                class="absolute z-10 top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600">
            <i class="fa fa-times w-2.5 h-2.5 overflow-visible"></i>
        </button>
        <nav id="nav" class="lg:text-sm lg:leading-6 relative divide-y" aria-label="primary">
            <div id="user_info " class="p-4 flex flex-col items-center">
                <div id="avatar"
                     class="flex items-center justify-center h-16 aspect-square bg-[#1971c233] rounded-full text-2xl ">
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
        </nav>
    </div>
</div>
    `
}


function setUpTrigger() {
    const trigger = document.getElementById("hamburger-trigger")
    trigger.addEventListener("click", () => {
        body.dataset.leftNavState = "open";
    })
}

document.addEventListener("DOMContentLoaded", () => {
    setupHamburgerContent()
    setUpTrigger()
})
