class AppView {
    init() {
        this.addEvents();
        console.log("AppView");

        const markup = `
        <header>
            <div class="container">
                <a id="logo" href="#/">David Bastian.</a>
                <nav class="menu">
                    <a href="#/about">about me</a>
                    <a href="mailto:d@davidbastian.red" target="_blank">d@davidbastian.red</a>
                </nav>
            </div>
        </header>
        <main></main>
        <footer>
            <div class="container">
                <p id="copyright">© 2018 David Bastian. Chilean Designer & Web Developer.</a>
                <nav class="menu">
                    <a href="#/full" target="_blank">F</a>
                </nav>
            </div>
        </footer>
    `;

        document.body.innerHTML = markup;
    }

    addEvents() {
        document.addEventListener("touchmove mousewheel DOMMouseScroll", function (
            e
        ) {
            e.preventDefault();
        });
    }
}

var view = new AppView();

export default view;