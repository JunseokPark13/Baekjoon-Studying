#include <iostream>
#include <stdio.h>
#define _USE_MATH_DEFINES
#include <math.h>

using namespace std;

int boj_3053() {

	double r; scanf_s("%lf", &r);

	printf("%lf\n", r * r * M_PI);
	printf("%lf\n", r * r * 2);

	return 0;
}