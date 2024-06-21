const success = {
  'ru': 'Ваш запрос успешно отправлен.',
  'en': 'Your request has been sent successfully.',
  'kz': 'Сұрауыңыз сәтті жіберілді.',
};

const errors = {
  'ru': 'Произошла ошибка отправки.',
  'en': 'There was a sending error.',
  'kz': 'Жіберу қатесі болды.',
};

export const baseSendSuccess = (target) => {
  window.clearForm(target);
  success.forEach((key, value) => {
    if (document.querySelector('html').getAttribute('lang') === key) {
      // eslint-disable-next-line no-console
      console.log(value);
    }
  });

  // eslint-disable-next-line no-console
  console.log('Ваша форма успешно отправлена');
};

export const baseSendError = () => {
  errors.forEach((key, value) => {
    if (document.querySelector('html').getAttribute('lang') === key) {
      // eslint-disable-next-line no-console
      console.log(value);
    }
  });
  // eslint-disable-next-line no-console
  console.error('Произошла ошибка отправки');
};
