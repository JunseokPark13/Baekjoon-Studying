#include <stdio.h>
using namespace std;

int main() {
	int m, n;
	scanf_s("%d %d", &m, &n);

	bool* arr = new bool[n + 1];

	for (int i = 2; i * i <= n;i++) {
		for (int j = i * i; j <= n; j += i) {
			arr[j] = 1;
		}
	}

	int sum = 0;
	int mincheck = false;
	int min = 0;

	for (int i = m; i <= n; i++) {
		if (i == 1) continue;
		if (arr[i] != 1) {
			if (!mincheck) {
				min = i; 
				mincheck = true;
			}
			sum += i;
		}
	}

	if (sum == 0) printf("-1\n");
	else {
		printf("%d\n", sum);
		printf("%d\n", min);
	}

	return 0;
}