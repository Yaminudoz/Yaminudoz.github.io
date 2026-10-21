(() => {
  const search = document.querySelector('#resource-search');
  const filters = document.querySelector('#resource-filters');
  const cards = [...document.querySelectorAll('.resource')];
  const count = document.querySelector('#resource-count');
  const empty = document.querySelector('#resource-empty');
  if (!search || !filters || !count || !empty) return;
  let category = 'all';
  const update = () => {
    const query = search.value.trim().toLocaleLowerCase();
    let visible = 0;
    cards.forEach(card => {
      const text = (card.dataset.search + ' ' + card.textContent).toLocaleLowerCase();
      const matches = (category === 'all' || card.dataset.category === category) && text.includes(query);
      card.hidden = !matches;
      if (matches) visible++;
    });
    count.textContent = '显示 ' + visible + ' 项资源';
    empty.hidden = visible !== 0;
  };
  filters.addEventListener('click', event => {
    const button = event.target.closest('button[data-filter]');
    if (!button) return;
    category = button.dataset.filter;
    filters.querySelectorAll('button').forEach(item => item.classList.toggle('active', item === button));
    update();
  });
  search.addEventListener('input', update);
  update();
})();