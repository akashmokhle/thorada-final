
export const Setting = {
    snackbar: (status = '') => {


        if(status == '') {
            return {
                position: 'bottom-center',
                style: {
					message: [
						['font-size', '14px'],
						['color', 'white']
					],
				}
            }
        }


        if(status == 's') {
            return {
                position: 'bottom-center',
                style: {
					message: [
						['font-size', '14px'],
						['color', 'white']
					],
					container: [
						['background-color', '#65de52']
					]
				}
            }
        }

        if(status == 'e') {
            return {
                position: 'bottom-center',
                style: {
					message: [
						['font-size', '14px'],
						['color', 'white']
					],
					container: [
						['background-color', '#f5605d']
					]
				}
            }
        }

    }
}