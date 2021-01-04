#include <iostream>

using namespace std;

bool tri_check(int a, int b, int c) {
	bool check = false;

	if (a * a + b * b == c * c) {
		check = true;
	}

	return check;
}

int boj_4153() {

	bool check = false;

	while (1) {
		int a, b, c; cin >> a >> b >> c;
		if (a ==0 && b == 0 && c == 0) break;

		if (a >= b) {
			if (a >= c) {
				check = tri_check(b, c, a);
			}
			else {
				check = tri_check(a,b,c);
			}
		}
		else {
			if (b >= c) {
				check = tri_check(a, c, b);
			}
			else {
				check = tri_check(a, b, c);
			}
		}
		if (check) cout << "right" << "\n";
		else cout << "wrong" << "\n";
	}

	return 0;
}