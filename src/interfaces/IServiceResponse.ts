type ServiceResponseErrorType = 'INVALID_DATA' | 'DOUBLE_REPORT' | 'MEASURE_NOT_FOUND' | 'CONFIRMATION_DUPLICATE';

interface ServiceResponseError {
    status: ServiceResponseErrorType,
    message: string
};

interface ServiceResponseSuccess<T> {
    status: 'SUCCESSFUL',
    message: T
};

export type ServiceResponse<T> = ServiceResponseError | ServiceResponseSuccess<T>;