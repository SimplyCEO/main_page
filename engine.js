/* Setup logo header */
const logo = document.getElementById("logo-header");
logo.src = "assets/logo/engine/duckduckgo.svg";
logo.alt = "DuckDuckGo Search Engine";

/* Set initial theme to dark */
const themeToggler = document.getElementById("theme-toggler");
document.body.classList.add("dark");
themeToggler.addEventListener("click", () =>
{
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("light"))
  { themeToggler.innerHTML = "<img src='assets/logo/sun.png' alt='Modo Diurno'>"; }
  else
  { themeToggler.innerHTML = "<img src='assets/logo/waning_moon.png' alt='Modo Noturno'>"; }
});

/* Change logo based on selected engine */
document.getElementById("engine-list").addEventListener("change", function()
{
  let engine = this.value;

  switch(engine)
  {
    case "archwiki":
    case "archuserrepository":
    {
      logo.src = "assets/logo/engine/archlinux.svg";
      logo.alt = "Arch Linux Search";
    } break;
    case "google":
    {
      logo.src = "assets/logo/engine/google.png";
      logo.alt = "Google Search Engine";
    } break;
    case "youtube":
    {
      logo.src = "assets/logo/engine/youtube.png";
      logo.alt = "YouTube Search Engine";
    } break;
    case "wikipedia":
    {
      logo.src = "assets/logo/engine/wikipedia.png";
      logo.alt = "Wikipedia Search Engine";
    } break;
    default:
    {
      logo.src = "assets/logo/engine/duckduckgo.svg";
      logo.alt = "DuckDuckGo Search Engine";
    } break;
  }
});

/* Search engine */
document.getElementById("search-button").addEventListener("click", function()
{
  let engine = document.getElementById("engine-list").value;
  let query = document.getElementById("search-field").value;

  switch(engine)
  {
    case "archwiki": window.location.href = "https://wiki.archlinux.org/index.php?search=" + query; break;
    case "archuserrepository": window.location.href = "https://aur.archlinux.org/packages?O=0&SeB=nd&K=" + query + "&outdated=&SB=p&SO=a&PP=250&submit=Go"; break;
    case "google": window.location.href = "https://www.google.com/search?q=" + query; break;
    case "youtube": window.location.href = "https://www.youtube.com/results?search_query=" + query; break;
    case "wikipedia": window.location.href = "https://en.wikipedia.org/w/index.php?search=" + query; break;
    default: window.location.href = "https://duckduckgo.com/?q=" + query; break;
  }
});

