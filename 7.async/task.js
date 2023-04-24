class AlarmClock {
    constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
		this.getCurrentFormattedTime = function () {
			const now = new Date();
			const hours = now.getHours().toString().padStart(2, '0');
			const minutes = now.getMinutes().toString().padStart(2, '0');
			return `${hours}:${minutes}`;
		}
	}



	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error('Отсутствуют обязательные аргументы');
		}
		if (this.alarmCollection.some(item => item.time === time && item.callback === callback)) {
			console.warn('Уже присутствует звонок на это же время');
		}

		const obj = {
			time: time,
			callback: callback,
			canCall: true,
		};
		this.alarmCollection.push(obj);
		console.log(`Будильник на время ${time} добавлен`);
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(item => item.time !== time);
		console.log(`Будильник на время ${time} удален`);
	}

	start() {
		if (this.intervalId) {
			return
		}

		this.intervalId = setInterval(() => {
			const TimeReal = this.getCurrentFormattedTime();
			console.log(`Текущее время: ${TimeReal}`);
			this.alarmCollection.forEach(acc => {
				if (acc.time === TimeReal && acc.canCall === true) {
					acc.canCall = false;
					acc.callback();
					console.log(`Звонок на время ${TimeReal} выполнен`);
				}
			})
		}, 1000)
	}

	stop() {
		if (this.intervalId) {
			clearInterval(this.intervalId);
			this.intervalId = null;
			console.log('Будильник остановлен');
		}
	}

	resetAllCalls() {
		this.alarmCollection.forEach(acc => acc.canCall = true)
		console.log('Все звонки будильников сброшены');
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
		console.log('Все будильники очищены');
	}
}