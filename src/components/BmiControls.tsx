import React from 'react'
import { IonRow, IonCol, IonButton, IonIcon } from '@ionic/react'
import { calculatorOutline, refreshOutline } from 'ionicons/icons'

const BmiControls: React.FC<{ onCalculate: () => void; onReset: () => void }> =
  ({ onCalculate, onReset }) => {
    return (
      <IonRow>
        <IonCol>
          <IonButton expand={'block'} onClick={onCalculate}>
            <IonIcon slot="start" icon={calculatorOutline} />
            Calculate
          </IonButton>
        </IonCol>
        <IonCol>
          <IonButton expand={'block'} onClick={onReset}>
            <IonIcon slot="start" icon={refreshOutline} />
            Reset
          </IonButton>
        </IonCol>
      </IonRow>
    )
  }

export default BmiControls
