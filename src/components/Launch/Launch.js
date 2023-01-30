
const Launch = ({launch}) => {

    const {mission_name, launch_year, links: {mission_patch_small}} = launch
    if (launch_year !== '2020') {
        return (

            <div>{mission_name}--{launch_year}--{mission_patch_small}</div>

        )
    }

}

export {Launch}