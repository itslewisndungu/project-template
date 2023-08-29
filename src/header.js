const header = document.getElementById("header")

header.innerHTML = `
    <button id="hamburger-trigger" class="md:hidden pointer h-8 w-8 rounded text-lg hover:bg-[#1c7ed6]" >
        <i class="fa fa-bars" aria-hidden="true"></i>
    </button>
    <button id="menu" class="hidden md:block pointer h-8 w-8 rounded text-lg hover:bg-[#1c7ed6]" >
        <i class="fa fa-bars" aria-hidden="true"></i>
    </button>
`