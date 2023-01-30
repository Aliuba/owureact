import {useEffect, useState} from "react";
import {launchService} from "../../services/launch.service";
import {Launch} from "../Launch/Launch";


const Launches = () => {
    const [launches, setLaunches] = useState([])

    useEffect(() => {

        launchService.getAll().then(value => value.data).then(value => setLaunches(value))

    }, [])

    return (
        <div>
            {launches.map(launch =>
                <Launch key={launch.mission_name} launch={launch}/>
            )}

        </div>
    )

}
export {Launches}