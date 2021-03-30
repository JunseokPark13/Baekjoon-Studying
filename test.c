# define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
int main() {
	int n; scanf("%d", &n);

	int a = 2;

	printf("%d = ", n);
	while (n != 1) {
		if (n % a == 0) {
			printf("%d", a);
			n /= a;
			a = 2;
			if (n != 1) printf(" * ");
		}
		else a++;
	}
	
	return 0;
}