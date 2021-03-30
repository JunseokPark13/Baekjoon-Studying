#include <stdio.h>
#include <iostream>
#include <algorithm>
using namespace std;

int test() {
	int a[3] = { 1,2,3 };
	int b[3] = { 1,2,3 };
	int c[3];

	copy(a, a + 3, c);

	int length = sizeof(a) / sizeof(a[0]);

	for (int i = 0; i < length; i++) {
		cout << a[i] << " " <<c[i] << "\n";
	}

	if (a == c) cout << "true" << "\n";
	else cout << "false" << "\n";
	return 0;
}