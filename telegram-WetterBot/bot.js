import TelegramBot from 'node-telegram-bot-api';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const telegramApi = process.env.TELEGRAM_API_KEY;

const bot = new TelegramBot(telegramApi, { polling: true });

async function getCurrentWeather(chatId, location) {
  const apiKey = process.env.WETTER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

  try {
    const response = await axios.get(url);
    const data = response.data;
    console.log(data);

    if (data.cod === 200) {
      const weatherDescription = data.weather[0].description;
      const temperature = data.main.temp;

      const message = `Aktuelles Wetter in ${location}: ${weatherDescription}, Temperatur: ${temperature}°C`;
      bot.sendMessage(chatId, message);
    } else {
      bot.sendMessage(chatId, 'Fehler beim Abrufen des Wetters.');
    }
  } catch (error) {
    console.error('Fehler:', error);
    bot.sendMessage(chatId, 'Ein Fehler ist aufgetreten.');
  }
}

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Sie können es mit dem Befehl "<location>" verwenden. Genießt das schöne Wetter');

  getCurrentWeather(chatId, msg.text);
});
