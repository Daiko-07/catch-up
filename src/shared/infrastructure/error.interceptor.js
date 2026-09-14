export const errorInterceptor ={
    onAfterResponse: (response) => response,
    onError: (error) =>
       let message;
    if(error.response){
        console.error('Data', error.response.data);
        console.error('Status:', error.response.status);
        console.error('Headers:', error.response.headers);
        message=error.reponse.data['message'] 'Error';
}
}