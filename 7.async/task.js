class AlarmClock {
    constructor() {
        this.alarmCollection = []
        this.intervalId = null
    }

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы')
        }
        let alarmExist = this.alarmCollection.some((alarm) => alarm.time === time)
        if (alarmExist) {
            console.warn('Уже присутствует звонок на это же время')
        }

        this.alarmCollection.push({
            callback: callback,
            time: time,
            canCall: true
        })
    }

    removeClock(time) {
        let clearArray = this.alarmCollection.filter((alarm) => alarm.time !== time)
        this.alarmCollection = clearArray
    }

    getCurrentFormattedTime() {
        const date = new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
          })
        return date
    }

    start() {
        if (this.intervalId) {
            return
        }
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach((alarm) => {
                if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall === true) {
                    alarm.canCall = false
                    alarm.callback()
                }
            })
        }, 1000)
    }

    stop() {
        clearInterval(this.intervalId)
        this.intervalId = null
    }

    resetAllCalls() {
        this.alarmCollection.forEach((alarm) => alarm.canCall = true)
    }

    clearAlarms() {
        this.stop()
        this.alarmCollection = []
    }
}