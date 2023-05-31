import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpinnerService } from './spinner.service';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	constructor(public spinnerService: SpinnerService, private http: HttpClient) { }
	getMessage(input: string) {
		// escape '+' characters in the input, since they are treated as spaces
		input = input.replace(/\+/g, '%2B');

		// add the input to the url
		return this.http.get(
			'http://localhost:3000/api/calculate?input=' + input);
	}
}
