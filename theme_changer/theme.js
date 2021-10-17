// Varaiable for saving the theme color
let theme = localStorage.getItem('theme');

if (theme == null) {
    changeTheme('light');
}
else {
    changeTheme(theme);
}


// Get the class for themes
let themeDots = document.getElementsByClassName('theme-dot');

// Loop for changing Themes 
for (var i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function() {
        let mode = this.dataset.mode
        console.log("obtion clicked: ", mode);
        changeTheme(mode);
    });
}


// theme color changer function 
function changeTheme(mode) {
    if (mode == 'light') {
        document.getElementById('theme-style').href = 'styles.css'
    }

    if (mode == 'blue') {
        document.getElementById('theme-style').href = 'blue.css'
    }

    if (mode == 'green') {
        document.getElementById('theme-style').href = 'green.css'
    }

    if (mode == 'purple') {
        document.getElementById('theme-style').href = 'purple.css'
    }
    localStorage.setItem('theme', mode)
}
