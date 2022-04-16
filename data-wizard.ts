import 'date-wizard';

declare module 'date-wizard' {
    // Add your module extensions here.
    const pad : (x:number) => string;
    interface DateDetails {
        hours: number;
        minutes: number;
        second: number;
    }
    
}
