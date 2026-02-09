

class TemperatureService {
    static determineStatut = (temperature, q1, q2, q3) => {
        const temp = temperature;
        const questions = [q1, q2, q3];
        const positiveResponses = questions.filter(q => q === true).length;

        if (temp >= 36.1 && temp <= 37.5 && positiveResponses === 0) {
            return {
                statut: 'Neutre',
                alerteEnvoyee: 'Tout va bien :)'
            };
        }
        if (temp > 37.5) {
            if (positiveResponses >= 2) {
                return {
                    statut: 'Urgent',
                    alerteEnvoyee: 'Ou laa !! :( ... Temp Haute, Veillez presenter cette alerte à la receptionniste IMMÉDIATEMENT (Ligne Rouge)'
                };
            } else if (positiveResponses === 1) {
                return {
                    statut: 'À surveiller',
                    alerteEnvoyee: 'Attention ! :() ...Temp Haute, Veillez faire la file pour presenter cette alerte à la receptionniste'
                };
            } 
        } else if (temp < 36.1) {
            if (positiveResponses >= 2) {
                return {
                    statut: 'Urgent',
                    alerteEnvoyee: 'Ou laa !! :( Temp Basse, Potentielle Hypothermie, Hypoglycémie, Infection grave :(...Veillez presenter cette alerte à la receptionniste IMMÉDIATEMENT (Ligne Rouge)'
                };
            } else if (positiveResponses === 1) {
                return {
                    statut: 'À surveiller',
                    alerteEnvoyee: 'Attention ! :( Temp Basse, Potentielle Grippe...Veillez faire la file pour presenter cette alerte à la receptionniste'
                };
            } 
        }
        return {
            statut: 'Neutre',
            alerteEnvoyee: 'Tout va bien :)'
        };
    }

    static createAlerte = (temperature, statut) => {
        return {
            typeAlerte: statut.statut,
            message: statut.alerteEnvoyee,
            date_envoie: new Date(),
            user: temperature.user,
            temperature: temperature._id
        };
    }
}

    module.exports = TemperatureService;

