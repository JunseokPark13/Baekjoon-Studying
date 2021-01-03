#include <iostream>

using namespace std;

void intger_factorization(int n) {
	
	int c = 2;

	while (n > 1) {
		if (n % c == 0) {
			n /= c;
			cout << c << "\n";
		}
		else c++;
	}
}

int boj_11653() {
	int n; cin >> n;

	intger_factorization(n);

	return 0;
}