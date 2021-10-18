import React from 'react'

import { IonCard, IonCardContent, IonRow, IonCol } from '@ionic/react'

const BmiResult: React.FC<{ result: number }> = ({ result }) => {
  return (
    <IonRow>
      <IonCol>
        <IonCard>
          <IonCardContent className="ion-text-center">
            Your BMI is: {result.toFixed(2)}
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
  )
}

export default BmiResult
