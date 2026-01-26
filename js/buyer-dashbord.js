function showSection(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.sidebar a').forEach(a => a.classList.remove('active'));

  document.getElementById(id).classList.add('active');
  event.target.classList.add('active');
}
