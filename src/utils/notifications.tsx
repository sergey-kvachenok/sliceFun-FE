const configureOptions = (message: string): NotificationOptions => ({
  body: message,
  icon: '/icon-96x96.png',
  image: '/icon-192x192.png',
  dir: "rtl",
  lang: 'en-US',
  badge: '/icon-96x96.png',
  vibrate: [200, 100, 200],
});

export const configureSubscription = async () => {
  if (!navigator.serviceWorker) return;

  try {
    Notification.requestPermission(async result => {
      if (result !== 'granted') {
        console.log('No result granted');
        return;
      }
    });

    const register = await navigator.serviceWorker.ready;
    let pushManager = register?.pushManager;

    let subscription = await pushManager.getSubscription();

    if (!subscription) {
      subscription = await pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: process.env.REACT_APP_VAPID_PUBLIC_KEY,
      });
      displayConfirmationNotification();
    }

    await sendRegistration(subscription);
  } catch (error) {
    console.log('ERROR', error);
  }
};

const sendRegistration = async (subscription: PushSubscription) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_PUSH_SERVER}/app/register`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(subscription),
    });
    const content = await response.json();
    return content;
  } catch (err) {
    console.log('FETCH REGISTRATION ERROR', err);
    return null;
  }
};

const displayConfirmationNotification = async () => {
  try {
    const message = 'You have been successfully subscribed';
    const options: NotificationOptions = configureOptions(message);

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(swreg => swreg.showNotification('Successfully subscribed', options));
    }
  } catch (err) {
    console.log('error', err);
  }
};
