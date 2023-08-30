const nav = document.getElementById("settings__navigation")

nav.innerHTML = `
    <div id="links" class="p-4 hidden lg:flex flex-col gap-1 border ">
        <a href="/" class="settings-nav-link"> 
            <i class="fa fa-money-bill" aria-hidden="true"></i>
            <span class="settings-nav-link-label">Payment Methods</span>
        </a>
        
        <a href="/" class="settings-nav-link ">
            <i class="fa fa-home" aria-hidden="true"></i>
            <span class="settings-nav-link-label">Members</span>
        </a>
        
        <a href="/" class="settings-nav-link ">
            <i class="fa fa-home" aria-hidden="true"></i>
            <span class="settings-nav-link-label">Meetings</span>
        </a>
        
        <a href="/" class="settings-nav-link ">
            <i class="fa fa-home" aria-hidden="true"></i>
            <span class="settings-nav-link-label">Loans</span>
        </a>
        
        <a href="/" class="settings-nav-link ">
            <i class="fa fa-home" aria-hidden="true"></i>
            <span class="settings-nav-link-label">Transactions</span>
        </a>
    </div>
    <div class="lg:hidden">
        <label for="membership" class="hidden">Menu settings</label>
        <select name="membership" id="membership" class="min-w-full p-2">
            <option value="free" selected>Payment Methods</option>
            <option value="bronze">Payments</option>
            <option value="silver" >Loans</option>
            <option value="Gold">Meetings</option>
        </select>
    </div>
`
