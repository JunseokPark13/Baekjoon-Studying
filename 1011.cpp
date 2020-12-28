#include <iostream>
#include <math.h>
using namespace std;

int boj_1011_1() {

	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);

	int tcase; cin >> tcase;

	for (tcase;tcase;tcase--) {
		long long x, y; cin >> x >> y;
		long long d = y - x;
		
		long long num = 3;

		long long n = 1, m = 2;
		long long count = 1;
		
		while (1) {
			if (d == 1) {
				count = 1;
				break;
			}
			if (d == 2) {
				count = 2;
				break;
			}
			n += count * 2;
			m += (count * 2) + 1;

			if (d >= n && d <= n + count) {
				count = count * 2 + 1;
				break;
			}
			if (d >= m && d <= m + count) {
				count = count * 2 + 2;
				break;
			}
			count++;
		}
		cout << count << endl;
	}


	return 0;
}

int boj_1011_2() {

	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);

	int tcase; cin >> tcase;

	for (tcase;tcase;tcase--) {
		double x, y; cin >> x >> y;
		double d = y - x;

		double num;

		num = (int)sqrt(d);

		if (d == num * num)
			cout << 2 * num - 1 << endl;
		else if (num * num < d && d <= num * num + num)
			cout << 2 * num << endl;
		else if (num * num + num < d && d < (num + 1) * (num + 1))
			cout << 2 * num + 1 << endl;
	}

	return 0;
}