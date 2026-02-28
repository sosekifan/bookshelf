const books = {
    journey:        { title: "Journey to the End of the Night",                     author: "Louis-Ferdinand Céline",  read: false, comments: "" },
    whyreadcalvino: { title: "Why Read The Classics?",            author: "Italo Calvino", read: false, comments: ""},
    kafkamurakami:  { title: "Kafka On The Shore",            author: "Haruki Murakami",  read: false, comments: "" },
    gogol:          { title: "Dead Souls",                       author: "Nikolai Gogol",  read: false, comments: "" },
    stronghold:     { title: "The Stronghold",                  author: "Dino Buzzati",  read: true, comments: "Life affirming, a book that I will revisit in 10 years, and 20, and 30, etc." },
    bewareofpity:   { title: "Beware of Pity",              author: "Stefan Zweig",  read: false, comments: "" },
    thedoor:        { title: "The Door",                    author: "Magda Szabo",  read: false, comments: "" },
    blackwings:     { title: "Black Wings Has My Angel",                 author: "Elliott Chaze",  read: false, comments: "" },
    berlin:         { title: "Berlin Alexanderplatz",                      author: "Alfred Döblin",  read: false, comments: "" },
    stoner: { title: "Stoner", author: "John Williams", read: false, comments: "" },
    granta:         { title: "Granta, Volume 129: Fate",                      author: "Multiple Authors",  read: false, comments: "" },
    kokoro:         { title: "Kokoro",                      author: "Natsume Soseki",  read: false, comments: "" },
    baldwin:        { title: "Giovanni's Room",                     author: "James Baldwin",  read: false, comments: "" },
    labyrinth:      { title: "Labyrinths",                   author: "Jorge Luis Borges",  read: true, comments: "I felt like I could see the Borgesian fingerprint on so much of what I read after this book." },
    mao2:           { title: "Mao II",                      author: "Don DeLillo",  read: false, comments: "" },
    oconnor:        { title: "The Complete Stories",                    author: "Flannery O'Connor",  read: false, comments: "" },
    ress:           { title: "Resurrection",                        author: "Leo Tolstoy",  read: false, comments: "" },
    dunces:         { title: "A Confederacy of Dunces",     author: "John Kennedy Toole",  read: false, comments: "" },
    dance:          { title: "Dance Dance Dance",                       author: "Haruki Murakami",  read: false, comments: "" },
    naomi:          { title: "Naomi",                       author: "Junichiro Tanizaki",  read: false, comments: "" },
    eoe:            { title: "East of Eden",            author: "John Steinbeck",  read: false, comments: "" },
    obscene:        { title: "Obscene Bird of Night",                     author: "Jose Donoso",  read: true, comments: "Dizzying and mortifying, wonderful." },
    proust:         { title: "In Search of Lost Time, Volume 1: Swann's Way",                      author: "Marcel Proust",  read: false, comments: "" },
    mulligan:       { title: "Mulligan Stew",                    author: "Gilbert Sorrentino",  read: false, comments: "" },
    ulysses:        { title: "Ulysses",                     author: "James Joyce",  read: false, comments: "" },
    underw:         { title: "Underworld",                  author: "Don Delillo",  read: false, comments: "" },
    foucault:       { title: "Foucault",                    author: "Jacques Derrida",  read: false, comments: "" },
    poetics:        { title: "Poetics",                     author: "Aristotle",  read: true, comments: "Literary criticism was born on this day." },
    dead:           { title: "The Tibetan Book of the Dead",                        author: "Chogyam Trungpa",  read: false, comments: "" },
    artoflive:      { title: "The Art of Living",               author: "Epictetus",  read: false, comments: "" },
    madness:        { title: "Madness and Civilization",                     author: "Michel Foucault",  read: true, comments: "Felt like an archaeological excavation of what society conceives as the mentally ill, surprisingly readable." },
    hume:           { title: "An Enquiry Concerning Human Understanding",                        author: "David Hume",  read: false, comments: "" },
    prince:         { title: "The Prince",                  author: "Niccolo Machiavelli",  read: false, comments: "" },
    discourses:     { title: "The Discourses",                  author: "Niccolo Machiavelli",  read: false, comments: "" },
    metamorp:       { title: "Metamorphoses",               author: "Ovid",  read: true, comments: "Read in Latin, Jupiter is a fucking freak dude." },
    gorg:           { title: "Gorgias",                     author: "Plato",  read: false, comments: "" },
    nausea:         { title: "Nausea",                      author: "Jean-Paul Sartre",  read: false, comments: "" },
    sophocles:      { title: "Sophocles I and II: Tragedies",                   author: "Sophocles",  read: false, comments: "" },
    tao:            { title: "Tao Te Ching",                         author: "Lao Tzu",  read: false, comments: "" },
    savage:         { title: "The Savage Detectives",                      author: "Roberto Bolaño",  read: true, comments: "I hope to join the Visceral Realists soon..." },
    "2666":         { title: "2666",                        author: "Roberto Bolaño",  read: true, comments: "Spiraling and meandering horror, unlike anything else." },
    borgespoems:    { title: "Selected Poems",                author: "Jorge Luis Borges",  read: false, comments: "" },
    wuther:         { title: "Wuthering Heights",           author: "Emily Brontë",  read: false, comments: "" },
    masternmarg:    { title: "The Master and Margarita",    author: "Mikhail Bulgakov",  read: false, comments: "" },
    stranger:       { title: "The Stranger",                author: "Albert Camus",  read: true, comments: "Meursault didn't do any of that shit I'm pretty sure. Not particularly impactful but was a quick and easy read." },
    plague:         { title: "The Plague",                  author: "Albert Camus",  read: true, comments: "More potent and engaging than Stranger, quite prescient." },
    exile:          { title: "Exile and the Kingdom",                       author: "Albert Camus",  read: false, comments: "" },
    journey2:       { title: "Journey to the End of the Night",                  author: "Louis-Ferdinand Céline",  read: false, comments: "" },
    deathtax:       { title: "Death on the Installment Plan",             author: "Louis-Ferdinand Céline",  read: false, comments: "" },
    hopsc:          { title: "Hopscotch",                   author: "Julio Cortázar",  read: false, comments: "" },
    libra:          { title: "Libra",                       author: "Don DeLillo",  read: false, comments: "" },
    "white noise":  { title: "White Noise",                 author: "Don DeLillo",  read: false, comments: "" },
    karam:          { title: "The Brothers Karamazov",      author: "Fyodor Dostoevsky",  read: false, comments: "" },
    crimep:         { title: "Crime and Punishment",        author: "Fyodor Dostoevsky",  read: false, comments: "" },
    demons:         { title: "Demons",                      author: "Fyodor Dostoevsky",  read: false, comments: "" },
    nameofrose:     { title: "The Name of the Rose",        author: "Umberto Eco",  read: false, comments: "" },
    sentence:       { title: "The Sentence",                    author: "Louise Erdrich",  read: false, comments: "" },
    sept:           { title: "Septology",                   author: "Jon Fosse",  read: false, comments: "" },
    recog:          { title: "The Recognitions",            author: "William Gaddis",  read: false, comments: "" },
    dubl:           { title: "Dubliners",                   author: "James Joyce",  read: false, comments: "" },
    trial:          { title: "The Trial",                   author: "Franz Kafka",  read: false, comments: "" },
    snowc:          { title: "Snow Country",                author: "Yasunari Kawabata",  read: false, comments: "" },
    karl:           { title: "My Struggle, Volume 1: Childhood and Youth",                        author: "Karl Ove Knausgaard",  read: false, comments: "" },
    lightness:      { title: "The Unbearable Lightness of Being", author: "Milan Kundera", read: false, comments: "" },
    solitude:       { title: "One Hundred Years of Solitude", author: "Gabriel Garcia Marquez", read: false, comments: "" },
    bloodmer:       { title: "Blood Meridian",              author: "Cormac McCarthy",  read: false, comments: "" },
    templeofgo:     { title: "Temple of the Golden Pavilion", author: "Yukio Mishima", read: false, comments: "" },
    hardboiled:     { title: "Hard-Boiled Wonderland and the End of the World",      author: "Haruki Murakami",  read: false, comments: "" },
    ada:            { title: "Ada, or Ardor",                         author: "Vladimir Nabokov",  read: false, comments: "" },
    lolita:         { title: "Lolita",                      author: "Vladimir Nabokov",  read: true, comments: "Painting in text, the sound of the letters as your tongue taps the top of your mouth." },
    palefire:       { title: "Pale Fire",                   author: "Vladimir Nabokov",  read: true, comments: "A book from another planet, one of the best I have ever read, incomprehensible." },
    speakm:         { title: "Speak, Memory",               author: "Vladimir Nabokov",  read: false, comments: "" },
    disquiet:       { title: "The Book of Disquiet",        author: "Fernando Pessoa",  read: true, comments: "Some of the most memorable aphorisms i've read, he just like me fr fr" },
    atlantis:       { title: "Masters of Atlantis",                    author: "Charles Portis",  read: false, comments: "" },
    gravity:        { title: "Gravity's Rainbow",           author: "Thomas Pynchon",  read: false, comments: "" },
    mason:          { title: "Mason & Dixon",               author: "Thomas Pynchon",  read: false, comments: "" },
    cancer:         { title: "Cancer Ward",            author: "Aleksandr Solzhenitsyn",  read: false, comments: "" },
    tristram:       { title: "The Life and Opinions of Tristram Shandy, Gentleman",             author: "Laurence Sterne",  read: false, comments: "" },
    lightanddark:   { title: "Light and Dark",              author: "Natsume Soseki",  read: false, comments: "" },
    botch:          { title: "Botchan",                       author: "Natsume Soseki",  read: false, comments: "" },
    "3cornered":    { title: "The Three-Cornered World",      author: "Natsume Soseki",  read: false, comments: "" },
    cat:            { title: "I am a Cat",                         author: "Natsume Soseki",  read: true, comments: "Hilarious and lovely and full of life." },
    oblivion:       { title: "Oblivion: Stories",                    author: "David Foster Wallace",  read: true, comments: "Home to some of my favorite short stories ever, Wallace at the peak of his powers." },
    lobster:        { title: "Consider The Lobster",                     author: "David Foster Wallace",  read: true, comments: "Authority and American Usage is one of my favorite essays ever..." },
    broom:          { title: "The Broom of the System",         author: "David Foster Wallace",  read: true, comments: "Considered the black sheep of his ouevre since he wrote it at 25, I found it extremely funny and charming though." },
    girlwithcurious:{ title: "Girl with Curious Hair",      author: "David Foster Wallace",  read: true, comments: "Least favorite of his work but still contains some heavy hitters, including Little Expressionless Animals" },
    allegra:        { title: "Allegra, 24 Hours, fexofenadine HCI 180mg",                     author: "",  read: false, comments: "Why did you even click this?" },
    "lost city":    { title: "Lost City Books Bookmark",                   author: "",  read: false, comments: "My favorite bookstore!" },
  };
  
  const sidebar     = document.getElementById('sidebar');
  const backdrop    = document.getElementById('backdrop');
  const closeBtn    = document.getElementById('close-btn');
  const bookTitle    = document.getElementById('book-title');
  const bookAuthor   = document.getElementById('book-author');
  const bookRead     = document.getElementById('book-read');
  const bookComments = document.getElementById('book-comments');
  const mapWrapper  = document.querySelector('.map-wrapper');
  
  // fix imagemap scaling!!
  
  function rescaleMap() {
    const img = document.querySelector('img[usemap]');
    const areas = document.querySelectorAll('area');
  
    const scaleX = img.offsetWidth / img.naturalWidth;
    const scaleY = img.offsetHeight / img.naturalHeight;
  
    areas.forEach(area => {
      const original = area.getAttribute('data-original-coords') || area.getAttribute('coords');
      area.setAttribute('data-original-coords', original); // cache original on first run
  
      const scaled = original.split(',').map((val, i) =>
        Math.round(i % 2 === 0 ? val * scaleX : val * scaleY)
      ).join(',');
  
      area.setAttribute('coords', scaled);
    });
  }
  
  window.addEventListener('load', rescaleMap);
  window.addEventListener('resize', rescaleMap);

  function openSidebar(key) {
    const book = books[key];
    if (!book) return;
  
    bookTitle.textContent    = book.title    || key;
    bookAuthor.textContent   = book.author   || '';
    bookRead.checked         = book.read     || false;
    bookComments.textContent = book.comments || '';
  
    bookAuthor.style.display   = book.author ? 'inline-block' : 'none';
    bookComments.style.display = book.comments ? 'block' : 'none';
  
    sidebar.classList.add('open');
    backdrop.classList.add('active');
    mapWrapper.classList.add('shifted');
  }
  
  function closeSidebar() {
    sidebar.classList.remove('open');
    backdrop.classList.remove('active');
    mapWrapper.classList.remove('shifted');
  }
  
  
// image map wiring, thank god for that website
  document.querySelectorAll('area[data-book]').forEach(area => {
    area.addEventListener('click', e => {
      e.preventDefault();
      const key = area.getAttribute('data-book');
      openSidebar(key);
    });
  });
  
  closeBtn.addEventListener('click', closeSidebar);
  backdrop.addEventListener('click', closeSidebar);
  
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeSidebar();
  });