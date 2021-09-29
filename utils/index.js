// TODO: abstract to utils
export const scrollToId = (id) => (e) => {
  e.preventDefault();
  document
    .getElementById(id)
    .scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const exportObj = {
  scrollToId,
};

export default exportObj;
