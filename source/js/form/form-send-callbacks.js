
export const baseSendSuccess = (target) => {
  window.clearForm(target);

  const successMsg = document.querySelector('.form__success');
  if (successMsg) {
    successMsg.classList.add('is-open');
  }
  // const lang = document.querySelector('html').lang;
  // console.log(lang);
  // for (let key in success) {
  //   if (lang === key) {
  //     console.log(success[key]);
  //   }
  // }

  // eslint-disable-next-line no-console
  // console.log('Ваша форма успешно отправлена');
};

export const baseSendError = () => {
  const errorMsg = document.querySelector('.form__error');
  if (errorMsg) {
    errorMsg.classList.add('is-open');
  }
};
