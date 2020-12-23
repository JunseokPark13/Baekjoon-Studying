#include <iostream>

using namespace std;

int boj_1193() {

	long tcase; cin >> tcase;
	long num = 0, sum = 0;;

	long denominator = 0, numerator = 0;
	//denominator(분자), numerator(분모) 

	for (int i = 1; i < tcase;i++) {
		sum += i;
		if (sum + (i + 1) >= tcase) {
			num = i+2;
			sum++;
			break;
		}
	}

	if (num % 2 == 0) {
		denominator = num - 1;
		numerator = num - denominator;
	}
	else {
		numerator = num - 1;
		denominator = num - numerator;
	}

	while (1) {
		if (sum == tcase) {
			break;
		}

		if (num % 2 == 0) {
			denominator--;
			numerator++;
			if (denominator == 1) break;
		}
		else {
			denominator++;
			numerator--;
			if (numerator == 1) break;
		}
		sum++;
	}

	if (tcase == 1) cout << "1/1" << endl;
	else cout << denominator << "/" << numerator << endl;
	
	return 0;
}