#include <iostream>

using namespace std;

int factorial(int n) {

	int res = 1;

	for (int i = 1; i <= n; i++) {
		res *= i;
	}

	return res;
}

int factorial2(int n) {

	int res = n;
	if (n == 0) return 1;
	if (n == 1) return 1;
	return res*factorial2(n-1);
}

int boj_10872() {

	int n; cin >> n;

	//cout << factorial(n) << "\n";
	cout << factorial2(n) << "\n";

	return 0;
}