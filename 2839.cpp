#include <iostream>

using namespace std;

int boj_2839() {
	 
	int kg = 0;
	int five = 0;
	int three = 0;
	int max = 0;

	bool done = false;

	cin >> kg;

	five = kg / 5;
	three = kg / 3;
	max = three;

	for (int i = 0; i <= five; i++) {
		for (int j = 0; j <= three;j++) {
			if ((5 * i + 3 * j) == kg) {
				if (max >= (i + j)) {
					max = i + j;
					done = true;
				}
			}
		}
	}

	if (!done) cout << -1 << endl;
	else cout << max << endl;


	return 0;
}
