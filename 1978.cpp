#include <iostream>
#include <math.h>
using namespace std;

int boj_1978_1() {

	int tcase; cin >> tcase;
	int count=0;

	for (tcase;tcase;tcase--) {
		int num; cin >> num;

		if (num == 1) continue;
		else if (num == 2) {
			count++;
			continue;
		}
		else if (num != 2 && num % 2 == 0) continue;
		else {
			int sq = sqrt(num);
			bool flag = false;
			while (sq > 1) {
				if (num % sq == 0) {
					flag = true;
					break;
				}
				sq--;
			}
			if (flag) continue;
		}
		count++;
	}

	cout << count << endl;


	return 0;
}

int boj_1978_2() {

	int tcase; cin >> tcase;
	int count = 0;

	for (tcase;tcase;tcase--) {
		int num; cin >> num;
		bool flag = false;
		if (num > 2) {
			for (int i = 2; i < num; i++) {
				if (num % i == 0) {
					flag = true;
					break;
				}
			}
		}
		if(!flag && num!=1) count++;
	}

	cout << count << endl;
	return 0;
}