import api from './api';

export const notificationService = {
  async requestPermission() {
    try {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error getting notification permission:', error);
      return false;
    }
  },

  async subscribeToTopics(userId: string, topics: string[]) {
    const { data } = await api.post('/notifications/subscribe', {
      userId,
      topics,
    });
    return data;
  },

  async unsubscribeFromTopics(userId: string, topics: string[]) {
    const { data } = await api.post('/notifications/unsubscribe', {
      userId,
      topics,
    });
    return data;
  },

  async sendNotification(title: string, body: string, topic: string) {
    const { data } = await api.post('/notifications/send', {
      title,
      body,
      topic,
    });
    return data;
  }
};