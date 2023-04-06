import { SeccionHardwarePrincipal } from '../SeccionHardwarePrincipal/SeccionHardwarePrincipal'
import { SeccionHardwareSecundaria } from '../SeccionHardwareSecundaria/SeccionHardwareSecundaria'
import { Slider } from '../Slider/Slider'


export const Inicio = () => {

    return (
        <div>
            <Slider/>
            <SeccionHardwarePrincipal/>
            <SeccionHardwareSecundaria/>
        </div>
    )

}