import {
  IonApp,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonTitle,
  IonToolbar,
  IonFooter,
  IonAlert,
  IonRow,
  IonCol,
} from '@ionic/react'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'
import React, { useState, useRef } from 'react'

import BmiControls from './components/BmiControls'
import BmiResult from './components/BmiResult'
import InputControl from './components/InputControl'

const App: React.FC = () => {
  const weightInputRef = useRef<HTMLIonInputElement>(null)
  const heightInputRef = useRef<HTMLIonInputElement>(null)
  const [bmi, setBmi] = useState<number>()
  const [errorState, setErrorState] = useState<boolean>(false)
  const [units, setUnits] = useState<'mkg' | 'ftlbs'>('mkg')
  const calculateBmi = () => {
    let height = heightInputRef.current?.value
    let weight = weightInputRef.current?.value

    if (!height || !weight || +height <= 0 || +weight <= 0) {
      setErrorState(true)
      return
    }

    const weightFactor = units === 'ftlbs' ? 2.2 : 1
    weight = +weight / weightFactor
    const heightFactor = units === 'ftlbs' ? 3.28 : 1
    height = +height / heightFactor
    setBmi(weight / (height * height))
  }
  const resetInputs = () => {
    heightInputRef.current!.value = ''
    weightInputRef.current!.value = ''
    setBmi(undefined)
  }

  const selectUnitHandler = (selectedValue: 'mkg' | 'ftlbs') => {
    setUnits(selectedValue)
  }

  return (
    <IonApp>
      <IonAlert
        isOpen={errorState}
        message={'Please Enter Valid Inputs'}
        buttons={[
          {
            text: 'Okay',
            handler: () => {
              heightInputRef.current!.value = ''
              weightInputRef.current!.value = ''
              setErrorState(false)
            },
          },
        ]}
      />
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>BMI Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonRow>
          <IonCol>
            <InputControl
              defaultValue={units}
              onSelectValue={selectUnitHandler}
            />
          </IonCol>
        </IonRow>
        <IonItem>
          <IonLabel position="floating">
            Your Height ({units === 'mkg' ? 'meters' : 'feet'})
          </IonLabel>
          <IonInput ref={heightInputRef} type="number" />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">
            Your Weight ({units === 'mkg' ? 'kilogram' : 'pounds'})
          </IonLabel>
          <IonInput ref={weightInputRef} type="number" />
        </IonItem>
        <IonGrid className="ion-text-center ion-margin">
          <BmiControls onCalculate={calculateBmi} onReset={resetInputs} />
          {bmi && <BmiResult result={bmi} />}
        </IonGrid>
      </IonContent>
      <IonFooter className="ion-text-center ion-padding">
        Developed with 🧠 <br />
        By Asutosh Padhi
      </IonFooter>
    </IonApp>
  )
}

export default App
