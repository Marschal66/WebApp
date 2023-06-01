import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	constructor(private http: HttpClient) { }
	getResult(input: string) {
		// escape '+' characters in the input, since they are treated as spaces
		input = input.replace(/\+/g, '%2B');

		// add the input to the url
		return this.http.get(
			'http://localhost:3000/api/calculate?input=' + input);
	}
}
