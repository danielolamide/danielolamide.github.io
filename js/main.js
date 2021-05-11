function toggleMenu() {
	var menu = document.getElementById("menu");
	var closeMenu = document.getElementById("close-menu");
	var openMenu = document.getElementById("open-menu");
	menu.classList.toggle("hidden");
	if (!menu.classList.contains("hidden")) {
		openMenu.classList.toggle("hidden");
		closeMenu.classList.toggle("hidden");
	} else {
		closeMenu.classList.toggle("hidden");
		openMenu.classList.toggle("hidden");
	}
}
