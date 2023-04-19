import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import fetch from 'node-fetch';



const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [currentCountryIndex, setCurrentCountryIndex] = useState(0);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(json => {
            setCountries(json);
            })
            .catch(error => {
            console.error(error);
            });
    }, []);

    const currentCountry = countries[currentCountryIndex];

    const handleNextCountry = () => {
        if (currentCountryIndex < countries.length - 1) {
            setCurrentCountryIndex(currentCountryIndex + 1);
        }
        /*si le post que je consulte est inférieur je peux retourner en arrière
        sinon ce ne sera pas possible */
    }

    const handlePreviousCountry = () => {
        if (currentCountryIndex > 0) {
            setCurrentCountryIndex(currentCountryIndex - 1);
        }
           /*si le post que je consulte est supérieur à 0 je peux retourner en arrière
        */
    }

    return (
        <View>
            <Text>PAGE COUNTRIES</Text>
            <Text>{currentCountry?.name?.common}</Text>
            <Text>{currentCountry?.capital}</Text>
            <Text>{currentCountry?.region}</Text>
          
            
            <View>
                <Button title="Précédent" onPress={handlePreviousCountry} />
                <Button title="Suivant" onPress={handleNextCountry} />
            </View>

        </View>
    )
}

export default Countries;
  /* "?" Consulte la base de donnée et je récupère les données dont j'ai besoin */
/* then envoi une requête à la base de donnée*/