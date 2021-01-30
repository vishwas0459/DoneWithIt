import { Formik } from 'formik';
import React from 'react';

function AppForm({ children, initialValues, validationSchema, onSubmit }) {
	return (
		<Formik initialValues={initialValues} validationSchema={validationSchema}>
			{() => <>{children}</>}
		</Formik>
	);
}

export default AppForm;
