type ServiceResponseErrorType = 'INVALID_DATA'
    | 'DOUBLE_REPORT'
    | 'MEASURE_NOT_FOUND'
    | 'MEASURES_NOT_FOUND'
    | 'CONFIRMATION_DUPLICATE';

interface ServiceResponseError<T> {
    status: ServiceResponseErrorType,
    message: T
};

interface ServiceResponseSuccess<T> {
    status: 'SUCCESSFUL',
    message: T
};

export type ServiceResponse<T> = ServiceResponseError<T> | ServiceResponseSuccess<T>;