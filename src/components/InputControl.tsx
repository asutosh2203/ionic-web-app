import React from 'react'
import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react'
const InputControl: React.FC<{
  defaultValue: 'mkg' | 'ftlbs'
  onSelectValue: (value: 'mkg' | 'ftlbs') => void
}> = ({ defaultValue, onSelectValue }) => {
  const inputChangeHandler = (event: CustomEvent) => {
    onSelectValue(event.detail.value)
  }

  return (
    <IonSegment value={defaultValue} onIonChange={inputChangeHandler}>
      <IonSegmentButton value="mkg">
        <IonLabel>m/ kg</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value="ftlbs">
        <IonLabel>ft/ lbs</IonLabel>
      </IonSegmentButton>
    </IonSegment>
  )
}

export default InputControl
